'use client';

import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import {
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
} from '~/components/ui/dropdown-menu';
import { type Session } from 'next-auth';
import { LayoutDashboard, User, Settings, LogOut, LogIn } from 'lucide-react';
import { ThemeButton } from '~/components/theme-button';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export function UserAvatarPanel({ session }: { session: Session | null }) {
	return (
		<DropdownMenuContent
			className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
			align="end"
			sideOffset={4}
			forceMount
		>
			<DropdownMenuLabel className="p-0 font-normal">
				<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
					<Avatar className="h-8 w-8 rounded-lg">
						<AvatarImage
							src={session?.user?.image ? session.user.image : undefined}
							alt={session?.user?.name ? session.user.name : 'Guest'}
						/>
						<AvatarFallback className="rounded-lg">
							{session?.user?.name ? session.user.name.slice(0, 2) : 'Gu'}
						</AvatarFallback>
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-semibold">
							{session?.user?.name ? session.user.name : 'Guest'}
						</span>
						<span className="truncate text-xs">
							{session?.user?.email
								? session?.user.email
								: 'guest@scribbly.pages.dev'}
						</span>
					</div>
				</div>
			</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem asChild disabled={session ? false : true}>
					<Link href="/dashboard">
						<LayoutDashboard className="mr-2 h-4 w-4" />
						<span>Dashboard</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild disabled={session ? false : true}>
					<Link href="/profile">
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild disabled={session ? false : true}>
					<Link href="/settings">
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuGroup>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<ThemeButton />
				{session ? (
					<DropdownMenuItem>
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={() => redirect('/signout')}
						>
							<LogOut className="mr-2 h-4 w-4" />
							<span>Sign out</span>
						</button>
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem>
						<button
							className="flex flex-row items-center justify-center gap-2"
							onClick={() => redirect('/signin')}
						>
							<LogIn className="mr-2 h-4 w-4" />
							<span>Sign in</span>
						</button>
					</DropdownMenuItem>
				)}
			</DropdownMenuGroup>
		</DropdownMenuContent>
	);
}
