"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import type { GuestbookEntry } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function GuestbookPage() {
  const { toast } = useToast();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", message: "" },
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const response = await fetch('/api/messages');
    const data = await response.json();
    setEntries(data.map((msg: any) => ({
      name: msg.name,
      message: msg.message,
      date: new Date(msg.date).toLocaleString()
    })));
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });
    
    form.reset();
    fetchMessages();
    
    toast({
      title: "Message Submitted!",
      description: "Thank you for your kind words.",
    });
  }

  return (
    <div className="animate-in fade-in duration-500">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-headline text-primary">
            Leave Your Mark
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Share your appreciation, memories, and well wishes for Professor Gwarzo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <Card className="p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-headline text-primary mb-6">Write a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your thoughts..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    Submit Message
                  </Button>
                </form>
              </Form>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-headline text-primary mb-6">Recent Entries</h3>
            <div className="space-y-6">
              {entries.map((entry, index) => (
                <Card key={index} className="p-6 shadow-sm">
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4">"{entry.message}"</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-primary">{entry.name}</p>
                      <p className="text-sm text-muted-foreground">{entry.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}