import { z } from "astro:content";

export const blogTitle = "Invisible Escher";
export const blogDescription = "Experiments in autie-ethnographic narratives.";
export const blogUrl = "https://invisible-escher.github.io";
export const blogAuthor = "Invisible Escher";
export const blogEmail  = "invisible-escher@proton.me";

export const latestPostCount = 3;
export const favouritePostSlugs = ["writings/i-am-autistic-with-adhd"];

export const categoryNames = ["Writings", "Snippets", "Resources"] as const;

export type Category = (typeof categoryNames)[number];

export type CategoryData = {
    name: string;
    description: string;
    color: { dark: string; light: string };
};

export const categories: Record<Category, CategoryData> = {
    Writings: {
        name: "Writings",
        description:
            "Longer from writings, typically experiments in autie-ethnographic narratives.",
        color: { dark: "0, 216, 255", light: "0, 125, 149" },
    },
    Snippets: {
        name: "Snippets",
        description:
            "Short-form writings, vignettes or poetry, however someone might describe these.",
        color: { dark: "244, 102, 35", light: "244, 102, 35" },
        // color: { dark: "216, 0, 102", light: "0, 125, 149" },
    },
    Resources: {
        name: "Resources",
        description:
            "Information I've collected over time that may be useful to others.",
        // color: { dark: "29, 99, 237", light: "29, 99, 237" },
        color: { dark: "255, 173, 26", light: "29, 99, 237" },
    },
};

export const postSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(categoryNames),
});

export type Post = z.infer<typeof postSchema>;

export type LayoutData = Partial<Post> & {
    title: string;
    isCategoryPage?: boolean;
};
