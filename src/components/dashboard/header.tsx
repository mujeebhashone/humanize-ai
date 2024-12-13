"use client";

import Link from "next/link";
import { UserNav } from "@/components/dashboard/user-nav";
import { Sparkles, Bell, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-all hover:opacity-80"
          >
            <div className="relative">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-600 rotate-6 group-hover:rotate-12 transition-transform">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-amber-500 animate-pulse" />
            </div>
            <div className="hidden lg:block">
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  Humanize
                </span>
                <span className="font-semibold text-lg bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  AI
                </span>
              </div>
              <span className="text-xs text-muted-foreground/80">Intelligent Conversations</span>
            </div>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Bell className="h-5 w-5 text-gray-700 dark:text-gray-400" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-[10px] font-medium text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />

          {/* User Navigation */}
          <UserNav />
        </div>
      </div>
    </header>
  );
} 