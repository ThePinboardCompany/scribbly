import * as React from 'react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '~/components/ui/navigation-menu';
import { UserAvatar } from '~/components/user-avatar';

export function RootNavBar() {
	return (
		<NavigationMenu className="fixed left-2 top-2 min-w-full">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
						<Link href="/" passHref>
							Home
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
						<Link href="/about" passHref>
							About
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
						<Link href="/docs" passHref>
							Documentation
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<UserAvatar />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
