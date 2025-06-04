"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-md">
        <h3 className="mb-4 text-xl font-bold text-primary">Thank You!</h3>
        <p className="mb-6 text-muted-foreground">
          Your registration has been received. We will contact you shortly to discuss the next steps.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="w-full">
          Submit Another Registration
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-md">
      <div className="mb-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="parentName">Parent's Full Name</Label>
          <Input id="parentName" placeholder="Enter your full name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="childName">Child's Name</Label>
          <Input id="childName" placeholder="Enter child's full name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Select required>
            <SelectTrigger id="age">
              <SelectValue placeholder="Select child's age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 years</SelectItem>
              <SelectItem value="3">3 years</SelectItem>
              <SelectItem value="4">4 years</SelectItem>
              <SelectItem value="5">5 years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comments">Comments</Label>
          <Textarea id="comments" placeholder="Any additional information you'd like to share" rows={4} />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Registration"}
      </Button>
    </form>
  )
}
