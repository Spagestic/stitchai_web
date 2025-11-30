import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bookmark, Share2, Download, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/utils";

// Jersey data (this would typically come from a database)
const jerseyData = [
  {
    id: 1,
    source: "/jerseys/black_jersey.png",
    name: "Midnight Edition",
    creator: "Alex",
    tags: ["Modern", "Bold"],
    description:
      "A sleek, all-black design with subtle textures that captures the essence of modern football aesthetics. Perfect for night matches and fans who appreciate minimalist elegance.",
    likes: 234,
    createdAt: "2024-11-15",
  },
  {
    id: 10,
    source: "/jerseys/noel_diwali.png",
    name: "Festive Flair",
    creator: "Noel",
    tags: ["Festive", "Elegant"],
    description:
      "Celebrating the spirit of Diwali with vibrant colors and intricate patterns. This design brings the joy of festivals to the football pitch.",
    likes: 189,
    createdAt: "2024-10-28",
  },
  {
    id: 2,
    source: "/jerseys/Classic_red_and_whit.png",
    name: "Classic Red",
    creator: "Maria",
    tags: ["Classic"],
    description:
      "A timeless red and white design inspired by legendary football clubs. Clean lines and traditional styling for the purist fan.",
    likes: 312,
    createdAt: "2024-11-01",
  },
  {
    id: 6,
    source: "/jerseys/helloween_2.png",
    name: "Halloween Special",
    creator: "Liam",
    tags: ["Festive", "Bold"],
    description:
      "Spooky and stylish, this Halloween-themed jersey features bold orange and black patterns perfect for the haunted season.",
    likes: 156,
    createdAt: "2024-10-25",
  },
  {
    id: 3,
    source: "/jerseys/Modern_blue_gradient.png",
    name: "Ocean Wave",
    creator: "João",
    tags: ["Modern"],
    description:
      "Inspired by the rolling waves of the Atlantic, this gradient blue design flows seamlessly from deep navy to sky blue.",
    likes: 278,
    createdAt: "2024-11-10",
  },
  {
    id: 4,
    source: "/jerseys/Retro_90s_style_jers.png",
    name: "Retro Vibes",
    creator: "Carlos",
    tags: ["Retro", "Bold"],
    description:
      "Taking you back to the golden era of 90s football with geometric patterns and bold color combinations that defined a generation.",
    likes: 423,
    createdAt: "2024-10-20",
  },
  {
    id: 11,
    source: "/jerseys/noel_helloween_2.png",
    name: "Ghostly Glow",
    creator: "Noel",
    tags: ["Festive", "Classic"],
    description:
      "A hauntingly beautiful design with ethereal glowing elements. Perfect for those who want to stand out on and off the pitch.",
    likes: 145,
    createdAt: "2024-10-26",
  },
  {
    id: 5,
    source: "/jerseys/hunyuan.png",
    name: "Nature's Touch",
    creator: "Sofia",
    tags: ["Modern", "Futuristic"],
    description:
      "Where nature meets technology. This futuristic design incorporates organic patterns with a high-tech finish.",
    likes: 198,
    createdAt: "2024-11-05",
  },
  {
    id: 7,
    source: "/jerseys/velocity.png",
    name: "Velocity",
    creator: "Emma",
    tags: ["Modern", "Futuristic"],
    description:
      "Speed visualized. Dynamic lines and aerodynamic patterns create the illusion of movement even when standing still.",
    likes: 267,
    createdAt: "2024-11-08",
  },
  {
    id: 8,
    source: "/jerseys/noel_helloween.png",
    name: "Spooky Night",
    creator: "Noel",
    tags: ["Festive", "Modern"],
    description:
      "The darkness of Halloween night captured in fabric. Mysterious patterns emerge from the shadows in this unique design.",
    likes: 134,
    createdAt: "2024-10-27",
  },
  {
    id: 9,
    source: "/jerseys/diwali.png",
    name: "Diwali Delight",
    creator: "Olivia",
    tags: ["Festive", "Elegant"],
    description:
      "Light triumphs over darkness in this Diwali-inspired masterpiece. Golden accents and warm colors celebrate the festival of lights.",
    likes: 221,
    createdAt: "2024-10-30",
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function JerseyDetailPage({ params }: Props) {
  const { id } = await params;
  const jersey = jerseyData.find((j) => j.id === parseInt(id));

  if (!jersey) {
    notFound();
  }

  // Get related jerseys (same tags or different creator)
  const relatedJerseys = jerseyData
    .filter(
      (j) =>
        j.id !== jersey.id &&
        (j.tags?.some((tag) => jersey.tags?.includes(tag)) ||
          j.creator !== jersey.creator)
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="size-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold truncate max-w-[200px]">
            {jersey.name}
          </h1>
          <Button variant="ghost" size="icon">
            <Share2 className="size-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Jersey Image */}
        <div className="relative aspect-3/4 w-full max-w-md mx-auto overflow-hidden rounded-3xl mb-6">
          <Image
            src={jersey.source}
            alt={jersey.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <Button variant="outline" size="lg" className="rounded-full gap-2">
            <Heart className="size-4" />
            <span>{jersey.likes}</span>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full gap-2">
            <Bookmark className="size-4" />
            Save
          </Button>
          <Button variant="outline" size="lg" className="rounded-full gap-2">
            <Download className="size-4" />
            Download
          </Button>
        </div>

        {/* Jersey Info */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Title and Creator */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{jersey.name}</h2>
            <div className="flex items-center justify-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src={undefined} />
                <AvatarFallback className="text-xs">
                  {getInitials(jersey.creator)}
                </AvatarFallback>
              </Avatar>
              <span className="text-muted-foreground">
                Created by{" "}
                <span className="text-foreground font-medium">
                  {jersey.creator}
                </span>
              </span>
            </div>
          </div>

          {/* Tags */}
          {jersey.tags && jersey.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {jersey.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-full px-4 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              About this design
            </h3>
            <p className="text-foreground leading-relaxed">
              {jersey.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">
                {jersey.likes}
              </span>{" "}
              likes
            </div>
            <div>
              Created{" "}
              <span className="font-medium text-foreground">
                {new Date(jersey.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          <Separator />

          {/* Create Similar Button */}
          <div className="flex justify-center">
            <Link href="/create">
              <Button size="lg" className="rounded-full px-8">
                Create Your Own Version
              </Button>
            </Link>
          </div>

          {/* Related Jerseys */}
          {relatedJerseys.length > 0 && (
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                You might also like
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedJerseys.map((related) => (
                  <Link
                    key={related.id}
                    href={`/jersey/${related.id}`}
                    className="relative aspect-3/4 overflow-hidden rounded-2xl group"
                  >
                    <Image
                      src={related.source}
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%)",
                      }}
                    />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-sm font-medium truncate">
                        {related.name}
                      </p>
                      <p className="text-white/70 text-xs">{related.creator}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
