import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}
