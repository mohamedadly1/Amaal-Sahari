"use client"

import { useState, useEffect } from "react"
import { useContent } from "@/lib/content-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Mail, Phone, MapPin } from "lucide-react"

export default function ContactEditor() {
  const { content, updateContact } = useContent()
  const [contact, setContact] = useState(content.contact)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setContact(content.contact)
  }, [content.contact])

  const handleSave = () => {
    updateContact(contact)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-muted-foreground">Update your business contact details</p>
        </div>
        <Button onClick={handleSave} className="gap-2">
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email
            </CardTitle>
            <CardDescription>Primary contact email address</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                placeholder="info@company.com"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Phone
            </CardTitle>
            <CardDescription>Primary contact phone number</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                placeholder="+966 50 000 0000"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Address
          </CardTitle>
          <CardDescription>Business address in both languages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="address-en">English Address</Label>
              <Input
                id="address-en"
                value={contact.address.en}
                onChange={(e) =>
                  setContact({ ...contact, address: { ...contact.address, en: e.target.value } })
                }
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address-ar">Arabic Address</Label>
              <Input
                id="address-ar"
                value={contact.address.ar}
                onChange={(e) =>
                  setContact({ ...contact, address: { ...contact.address, ar: e.target.value } })
                }
                placeholder="المدينة، البلد"
                dir="rtl"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
