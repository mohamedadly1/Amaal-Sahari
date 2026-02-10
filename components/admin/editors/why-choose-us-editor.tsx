"use client"

import { useContent } from "@/lib/content-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import FileUpload from "../file-upload"

export default function WhyChooseUsEditor() {
  const { content, updateContent } = useContent()

  const updateImageUrl = (value: string) => {
    updateContent({
      ...content,
      whyChooseUs: { ...content.whyChooseUs, imageUrl: value },
    })
  }

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      en: { title: "New Feature", description: "Description" },
      ar: { title: "ميزة جديدة", description: "الوصف" },
    }
    updateContent({
      ...content,
      whyChooseUs: {
        ...content.whyChooseUs,
        items: [...content.whyChooseUs.items, newItem],
      },
    })
  }

  const removeItem = (id: string) => {
    updateContent({
      ...content,
      whyChooseUs: {
        ...content.whyChooseUs,
        items: content.whyChooseUs.items.filter((i) => i.id !== id),
      },
    })
  }

  const updateItem = (id: string, field: string, value: string, locale: "en" | "ar") => {
    updateContent({
      ...content,
      whyChooseUs: {
        ...content.whyChooseUs,
        items: content.whyChooseUs.items.map((item) =>
          item.id === id ? { ...item, [locale]: { ...item[locale], [field]: value } } : item
        ),
      },
    })
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Why Choose Us Section</h3>

      <div>
        <FileUpload
          label="Section Image"
          description="Upload image or paste URL"
          value={content.whyChooseUs.imageUrl}
          onChange={(url) => updateImageUrl(url)}
          accept="image/*"
          fileType="image"
        />
      </div>

      <div className="flex justify-between items-center">
        <h4 className="font-medium">Features</h4>
        <Button onClick={addItem} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Feature
        </Button>
      </div>

      <div className="space-y-4">
        {content.whyChooseUs.items.map((item) => (
          <Card key={item.id} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">Feature #{item.id}</h4>
              <Button variant="destructive" size="sm" onClick={() => removeItem(item.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Title (English)</Label>
                <Input
                  value={item.en.title}
                  onChange={(e) => updateItem(item.id, "title", e.target.value, "en")}
                />
              </div>
              <div>
                <Label>Title (Arabic)</Label>
                <Input
                  value={item.ar.title}
                  onChange={(e) => updateItem(item.id, "title", e.target.value, "ar")}
                  className="text-right"
                  dir="rtl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Description (English)</Label>
                <Textarea
                  value={item.en.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value, "en")}
                  rows={2}
                />
              </div>
              <div>
                <Label>Description (Arabic)</Label>
                <Textarea
                  value={item.ar.description}
                  onChange={(e) => updateItem(item.id, "description", e.target.value, "ar")}
                  className="text-right"
                  dir="rtl"
                  rows={2}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
