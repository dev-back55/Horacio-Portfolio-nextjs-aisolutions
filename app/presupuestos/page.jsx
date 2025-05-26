// app/quote/page.js
'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuoteFormNextJs from '@/components/QuoteFormNextJs';
import QuoteFormWordPress from '@/components/QuoteFormWordPress';

export default function QuotePage() {
  const [activeTab, setActiveTab] = useState('nextjs');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Solicitá tu cotización
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Completá el formulario para tu proyecto con Next.js/MongoDB o WordPress.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="nextjs">Next.js & MongoDB</TabsTrigger>
            <TabsTrigger value="wordpress">WordPress</TabsTrigger>
          </TabsList>
          <TabsContent value="nextjs">
            <QuoteFormNextJs />
          </TabsContent>
          <TabsContent value="wordpress">
            <QuoteFormWordPress />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}