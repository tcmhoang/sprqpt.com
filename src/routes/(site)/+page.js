import BirthdayCakeIcon from '$lib/icons/BirthdayCakeIcon.svelte';
import BriefcaseIcon from '$lib/icons/BriefcaseIcon.svelte';
import GithubIcon from '$lib/icons/GithubIcon.svelte';
import KeybaseIcon from '$lib/icons/KeybaseIcon.svelte';
import PositionLocationIcon from '$lib/icons/PositionLocationIcon.svelte';
import Telegram from '$lib/icons/Telegram.svelte';

export const load = () => ({
	title: 'Feed',
	deets: [
		{
			text: 'Available',
			icon: BriefcaseIcon
		},
		{
			text: 'September 25th',
			icon: BirthdayCakeIcon
		},
		{
			text: 'Global',
			icon: PositionLocationIcon
		}
	],

	summary: [
		'On the mission to spice up the web, pixel by pixel ✨',
		'Software Engineer, Creative Developer, Troublemaker solver, Spam Deleter.'
	]
});
