import { LayoutDashboard, LogOut, Settings, User, LogIn } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Button } from '~/components/ui/button';
import { auth } from '~/server/auth';
import Link from 'next/link';
import { signOutAction, signInAction } from '~/actions/auth';
import { ThemeButton } from '~/components/theme-button';

export async function UserAvatar() {
	const session = await auth();
	const user = session?.user;

	return (
		<div className="ml-auto flex items-center space-x-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="relative h-8 w-8 rounded-full">
						<Avatar className="h-8 w-8">
							<AvatarImage
								src={user?.image ? user.image : undefined}
								alt={`@${user?.name ? user.name : 'Anonymous'}`}
							/>
							<AvatarFallback>
								{user?.name ? user.name.slice(0, 2) : 'An'}
							</AvatarFallback>
						</Avatar>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" align="end" forceMount>
					<DropdownMenuLabel className="font-normal">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">
								{user?.name ? user.name : 'Anonymous'}
							</p>
							<p className="text-xs leading-none text-muted-foreground">
								{user?.email ? user.email : 'anonymous@example.com'}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem asChild>
						<Link href="/dashboard">
							<LayoutDashboard className="mr-2 h-4 w-4" />
							<span>Dashboard</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/profile">
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/settings">
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<ThemeButton />
					{session ? (
						<DropdownMenuItem>
							<form action={signOutAction}>
								<button
									type="submit"
									className="flex flex-row items-center justify-center gap-2"
								>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Sign out</span>
								</button>
							</form>
						</DropdownMenuItem>
					) : (
						<DropdownMenuItem>
							<form action={signInAction}>
								<button
									type="submit"
									className="flex flex-row items-center justify-center gap-2"
								>
									<LogIn className="mr-2 h-4 w-4" />
									<span>Sign in</span>
								</button>
							</form>
						</DropdownMenuItem>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
