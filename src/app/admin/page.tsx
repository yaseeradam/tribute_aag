"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  id: string;
  name: string;
  message: string;
  date: string;
  sentiment: 'positive' | 'negative';
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState<{ positive: Message[], negative: Message[] }>({ positive: [], negative: [] });

  const login = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
      fetchMessages();
    }
  };

  const fetchMessages = async () => {
    const response = await fetch('/api/admin', {
      headers: { 'Authorization': 'Bearer admin123' }
    });
    const data = await response.json();
    setMessages(data);
  };

  const deleteMessage = async (id: string) => {
    await fetch('/api/admin', {
      method: 'DELETE',
      headers: { 
        'Authorization': 'Bearer admin123',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    fetchMessages();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={login} className="w-full">Login</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Message Management</h1>
      
      <Tabs defaultValue="positive">
        <TabsList>
          <TabsTrigger value="positive">Positive ({messages.positive.length})</TabsTrigger>
          <TabsTrigger value="negative">Negative ({messages.negative.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="positive" className="space-y-4">
          {messages.positive.map((msg) => (
            <Card key={msg.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{msg.name}</p>
                    <p className="text-sm text-gray-600">{new Date(msg.date).toLocaleString()}</p>
                    <p className="mt-2">{msg.message}</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => deleteMessage(msg.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="negative" className="space-y-4">
          {messages.negative.map((msg) => (
            <Card key={msg.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{msg.name}</p>
                    <p className="text-sm text-gray-600">{new Date(msg.date).toLocaleString()}</p>
                    <p className="mt-2">{msg.message}</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => deleteMessage(msg.id)}>
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}