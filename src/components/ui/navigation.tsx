'use client'
import { menuMain } from "@/data/menus"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuSubTriggerStyle, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./navigation-menu"
import React from "react"
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "max-w-full block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <strong className="text-sm font-medium leading-none">{title}</strong>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuMain.map(link => (
          <NavigationMenuItem>
            {link.subLinks ? (
              <>
                <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {link.subLinks.map((sublink) => (
                      <ListItem
                        className={navigationMenuSubTriggerStyle()}
                        key={sublink.name}
                        title={sublink.name}
                        href={sublink.url}
                      >
                        {sublink.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={link.url}
                className={cn(navigationMenuTriggerStyle(), link.highlighted ? "menu-item-highlighted" : "")}
              >
                {link.name}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}