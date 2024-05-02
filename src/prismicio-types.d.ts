// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *navigation → Nav Item*
 */
export interface NavigationDocumentDataNavItemItem {
	/**
	 * Link Label field in *navigation → Nav Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav_item[].link_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	link_label: prismic.KeyTextField;

	/**
	 * Link_Url field in *navigation → Nav Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav_item[].link_url
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link_url: prismic.LinkField;
}

/**
 * Content for navigation documents
 */
interface NavigationDocumentData {
	/**
	 * Nav Item field in *navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.nav_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_item: prismic.GroupField<Simplify<NavigationDocumentDataNavItemItem>>;
}

/**
 * navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavigationDocumentData>,
	'navigation',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| ContactFormSlice
	| ExpertiseCardsSlice
	| BentoSlice
	| TechListSlice
	| AboutSlice
	| HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Content for settings documents
 */
interface SettingsDocumentData {
	/**
	 * Square Logo field in *settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.square_logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	square_logo: prismic.ImageField<never>;

	/**
	 * Rectangle Logo field in *settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.rectangle_logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	rectangle_logo: prismic.ImageField<never>;

	/**
	 * Company Name field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_name: prismic.KeyTextField;

	/**
	 * Company Phone field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_phone
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_phone: prismic.KeyTextField;

	/**
	 * Company Email field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_email
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_email: prismic.KeyTextField;

	/**
	 * Company Location field in *settings*
	 *
	 * - **Field Type**: GeoPoint
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.company_location
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#geopoint
	 */
	company_location: prismic.GeoPointField;

	/**
	 * Legal Mention field in *settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.legal_mention
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	legal_mention: prismic.KeyTextField;
}

/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

/**
 * Item in *socials → Social_Medial*
 */
export interface SocialsDocumentDataSocialMedialItem {
	/**
	 * Social_Label field in *socials → Social_Medial*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: socials.social_medial[].social_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	social_label: prismic.KeyTextField;

	/**
	 * Social_Link field in *socials → Social_Medial*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: socials.social_medial[].social_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	social_link: prismic.LinkField;

	/**
	 * Social_Icon field in *socials → Social_Medial*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **API ID Path**: socials.social_medial[].social_icon
	 * - **Documentation**: https://prismic.io/docs/field#select
	 */
	social_icon: prismic.SelectField<
		'LinkedIn' | 'Facebook' | 'X' | 'Youtube' | 'Instagram' | 'TikTok' | 'Github'
	>;
}

/**
 * Content for socials documents
 */
interface SocialsDocumentData {
	/**
	 * Social_Medial field in *socials*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: socials.social_medial[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	social_medial: prismic.GroupField<Simplify<SocialsDocumentDataSocialMedialItem>>;
}

/**
 * socials document from Prismic
 *
 * - **API ID**: `socials`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SocialsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SocialsDocumentData>,
	'socials',
	Lang
>;

export type AllDocumentTypes =
	| NavigationDocument
	| PageDocument
	| SettingsDocument
	| SocialsDocument;

/**
 * Primary content in *About → Primary*
 */
export interface AboutSliceDefaultPrimary {
	/**
	 * Url id field in *About → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.primary.url_id
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	url_id: prismic.KeyTextField;

	/**
	 * Title field in *About → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Text field in *About → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Text goes here
	 * - **API ID Path**: about.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Primary content in *About → Items*
 */
export interface AboutSliceDefaultItem {
	/**
	 * Company Name field in *About → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].company_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	company_name: prismic.KeyTextField;

	/**
	 * Job Title field in *About → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].job_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	job_title: prismic.KeyTextField;

	/**
	 * Description field in *About → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].description
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	description: prismic.KeyTextField;

	/**
	 * Date Start field in *About → Items*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].date_start
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date_start: prismic.DateField;

	/**
	 * Date End field in *About → Items*
	 *
	 * - **Field Type**: Date
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.items[].date_end
	 * - **Documentation**: https://prismic.io/docs/field#date
	 */
	date_end: prismic.DateField;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutSliceDefaultPrimary>,
	Simplify<AboutSliceDefaultItem>
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<'about', AboutSliceVariation>;

/**
 * Primary content in *Bento → Primary*
 */
export interface BentoSliceDefaultPrimary {
	/**
	 * Title field in *Bento → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * text field in *Bento → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;

	/**
	 * Url id field in *Bento → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.primary.url_id
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	url_id: prismic.KeyTextField;

	/**
	 * Bg_Img field in *Bento → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.primary.bg_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	bg_img: prismic.ImageField<never>;
}

/**
 * Primary content in *Bento → Items*
 */
export interface BentoSliceDefaultItem {
	/**
	 * Title field in *Bento → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Body field in *Bento → Items*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.items[].body
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	body: prismic.RichTextField;

	/**
	 * Image field in *Bento → Items*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.items[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Link field in *Bento → Items*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.items[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * CTA Label field in *Bento → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.items[].cta_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * Wide field in *Bento → Items*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: bento.items[].wide
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	wide: prismic.BooleanField;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BentoSliceDefaultPrimary>,
	Simplify<BentoSliceDefaultItem>
>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault;

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BentoSlice = prismic.SharedSlice<'bento', BentoSliceVariation>;

/**
 * Primary content in *ContactForm → Primary*
 */
export interface ContactFormSliceDefaultPrimary {
	/**
	 * Link_url field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.link_url
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	link_url: prismic.KeyTextField;

	/**
	 * Title field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Letter_Image field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.letter_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	letter_image: prismic.ImageField<never>;

	/**
	 * Banner_Title field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.banner_title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	banner_title: prismic.KeyTextField;

	/**
	 * Banner_Texte field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.banner_texte
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	banner_texte: prismic.KeyTextField;

	/**
	 * Looking_For_Work field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: contact_form.primary.looking_for_work
	 * - **Documentation**: https://prismic.io/docs/field#boolean
	 */
	looking_for_work: prismic.BooleanField;

	/**
	 * Avatar field in *ContactForm → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact_form.primary.avatar
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	avatar: prismic.ImageField<never>;
}

/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ContactFormSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ContactForm*
 */
type ContactFormSliceVariation = ContactFormSliceDefault;

/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: ContactForm
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSlice = prismic.SharedSlice<'contact_form', ContactFormSliceVariation>;

/**
 * Primary content in *ExpertiseCards → Primary*
 */
export interface ExpertiseCardsSliceDefaultPrimary {
	/**
	 * Title field in *ExpertiseCards → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Url id field in *ExpertiseCards → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.primary.url_id
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	url_id: prismic.KeyTextField;
}

/**
 * Primary content in *ExpertiseCards → Items*
 */
export interface ExpertiseCardsSliceDefaultItem {
	/**
	 * Icon_String field in *ExpertiseCards → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.items[].icon_string
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	icon_string: prismic.KeyTextField;

	/**
	 * Title field in *ExpertiseCards → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * Text field in *ExpertiseCards → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.items[].text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;

	/**
	 * Color field in *ExpertiseCards → Items*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: expertise_cards.items[].color
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	color: prismic.ColorField;
}

/**
 * Default variation for ExpertiseCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExpertiseCardsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ExpertiseCardsSliceDefaultPrimary>,
	Simplify<ExpertiseCardsSliceDefaultItem>
>;

/**
 * Slice variation for *ExpertiseCards*
 */
type ExpertiseCardsSliceVariation = ExpertiseCardsSliceDefault;

/**
 * ExpertiseCards Shared Slice
 *
 * - **API ID**: `expertise_cards`
 * - **Description**: ExpertiseCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExpertiseCardsSlice = prismic.SharedSlice<
	'expertise_cards',
	ExpertiseCardsSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Presentation field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.presentation
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	presentation: prismic.KeyTextField;

	/**
	 * What I Do field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.what_i_do
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	what_i_do: prismic.KeyTextField;

	/**
	 * Text Texture Img field in *Hero → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.text_texture_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	text_texture_img: prismic.ImageField<never>;

	/**
	 * CTA Label field in *Hero → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.cta_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * CTA Link field in *Hero → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.primary.cta_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	cta_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *TechList → Items*
 */
export interface TechListSliceDefaultItem {
	/**
	 * Tech Name field in *TechList → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.items[].tech_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	tech_name: prismic.KeyTextField;

	/**
	 * Tech Color field in *TechList → Items*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: tech_list.items[].tech_color
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	tech_color: prismic.ColorField;
}

/**
 * Default variation for TechList Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	Simplify<TechListSliceDefaultItem>
>;

/**
 * Slice variation for *TechList*
 */
type TechListSliceVariation = TechListSliceDefault;

/**
 * TechList Shared Slice
 *
 * - **API ID**: `tech_list`
 * - **Description**: TechList
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TechListSlice = prismic.SharedSlice<'tech_list', TechListSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			NavigationDocument,
			NavigationDocumentData,
			NavigationDocumentDataNavItemItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SocialsDocument,
			SocialsDocumentData,
			SocialsDocumentDataSocialMedialItem,
			AllDocumentTypes,
			AboutSlice,
			AboutSliceDefaultPrimary,
			AboutSliceDefaultItem,
			AboutSliceVariation,
			AboutSliceDefault,
			BentoSlice,
			BentoSliceDefaultPrimary,
			BentoSliceDefaultItem,
			BentoSliceVariation,
			BentoSliceDefault,
			ContactFormSlice,
			ContactFormSliceDefaultPrimary,
			ContactFormSliceVariation,
			ContactFormSliceDefault,
			ExpertiseCardsSlice,
			ExpertiseCardsSliceDefaultPrimary,
			ExpertiseCardsSliceDefaultItem,
			ExpertiseCardsSliceVariation,
			ExpertiseCardsSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			TechListSlice,
			TechListSliceDefaultItem,
			TechListSliceVariation,
			TechListSliceDefault
		};
	}
}
