import { Merge } from "./utils";

export type EntityData = {
  type: string;
  id: number;
  link: string;
};
/**
 * Type that represents objects stored in `state.source.data`.
 * These objects give information about data associated to a
 * given URL in a Frontity site.
 */
export type Data =
  | BaseData
  | ErrorData
  | ArchiveData
  | TaxonomyData
  | CategoryData
  | TagData
  | AuthorData
  | PostTypeArchiveData
  | PostArchiveData
  | DateData
  | PostTypeData
  | PostData
  | PageData
  | AttachmentData;

/**
 * Base properties of objects of types `Data`.
 */
export type BaseData = {
  type?: string;
  id?: number;
  taxonomy?: string;
  isFetching: boolean;
  isReady: boolean;
  isError?: boolean;
  isArchive?: boolean;
  isTaxonomy?: boolean;
  isCategory?: boolean;
  isTag?: boolean;
  isAuthor?: boolean;
  isPostTypeArchive?: boolean;
  isPostArchive?: boolean;
  isDate?: boolean;
  isPostType?: boolean;
  isPost?: boolean;
  isPage?: boolean;
  isAttachment?: boolean;
  isHome?: boolean;
};

// ERROR

/**
 * Adds new properties to `BaseData` to identify errors.
 * @property {string} errorStatusText
 * @property {number} errorStatus
 */
export type ErrorData = Merge<
  BaseData,
  {
    isError: true;
    errorStatus: number;
    errorStatusText: string;
    isReady: true;
    isFetching: false;

    // This is ugly but it seems like the best way.
    // Also types are erased at runtime so it doesnt add to bundle size
    is400?: boolean;
    is401?: boolean;
    is402?: boolean;
    is403?: boolean;
    is404?: boolean;
    is405?: boolean;
    is406?: boolean;
    is407?: boolean;
    is408?: boolean;
    is409?: boolean;
    is410?: boolean;
    is411?: boolean;
    is412?: boolean;
    is413?: boolean;
    is414?: boolean;
    is415?: boolean;
    is416?: boolean;
    is417?: boolean;
    is500?: boolean;
    is501?: boolean;
    is502?: boolean;
    is503?: boolean;
    is504?: boolean;
    is505?: boolean;
  }
>;

// ARCHIVES

/**
 * Adds properties to `BaseData` to identify archive pages.
 * @property {true} isArchive
 * @property {EntityData[]} items - List of items contained in this archive page.
 * @property {number} total - Total number of post entities in the whole archive.
 * @property {number} total - Total number of pages in the whole archive.
 */
export type ArchiveData = Merge<
  BaseData,
  {
    isArchive: true;
    items: EntityData[];
    total?: number;
    totalPages?: number;
  }
>;

/**
 * Adds properties to `ArchiveData` to identify taxonomy pages.
 * @property {true} isTaxonomy
 * @property {string} taxonomy - Taxonomy slug.
 * @property {number} id - Taxonomy id.
 */
export type TaxonomyData = Merge<
  ArchiveData,
  {
    isTaxonomy: true;
    taxonomy: string;
    id: number;
  }
>;

/**
 * Adds properties to `TaxonomyData` to identify category pages.
 * @property {true} isCategory
 * @property {"category"} taxonomy
 */
export type CategoryData = Merge<
  TaxonomyData,
  {
    taxonomy: "category";
    isCategory: true;
  }
>;
/**
 * Adds properties to `TaxonomyData` to identify tag pages.
 * @property {true} isTag
 * @property {"tag"} taxonomy
 */
export type TagData = Merge<
  TaxonomyData,
  {
    taxonomy: "tag";
    isTag: true;
  }
>;

/**
 * Adds properties to `ArchiveData` to identify author pages.
 * @property {true} isAuthor
 * @property {number} id - Author id.
 */
export type AuthorData = Merge<
  ArchiveData,
  {
    isAuthor: true;
    id: number;
  }
>;

/**
 * Adds properties to `ArchiveData` to identify post type archive pages.
 * @property {true} isPostTypeArchive
 * @property {string} type - Post type slug.
 */
export type PostTypeArchiveData = Merge<
  ArchiveData,
  {
    isPostTypeArchive: true;
    type: string;
  }
>;

/**
 * Adds properties to `PostArchiveData` to identify `post` archive pages.
 * @property {true} isPostArchive
 */
export type PostArchiveData = Merge<
  PostTypeArchiveData,
  {
    isPostArchive: true;
  }
>;

/**
 * Adds properties to `ArchiveData` to identify date archive pages.
 * @property {true} isDate
 * @property {number} year - The year number.
 * @property {number} month - The month number (from 1 to 12).
 * @property {number} day - The day number.
 */
export type DateData = Merge<
  ArchiveData,
  {
    isDate: true;
    year: number;
    month?: number;
    day?: number;
  }
>;

// POST TYPES

/**
 * Adds properties to `BaseData` to identify post type pages.
 * Post type entities are posts, pages, attachments, custom post types, etc.
 * @property {true} isPostType
 * @property {string} type - Post type slug.
 * @property {number} id - Entity id.
 */
export type PostTypeData = Merge<
  BaseData,
  {
    isPostType: true;
    type: string;
    id: number;
  }
>;

/**
 * Adds properties to `PostTypeData` to identify posts.
 * @property {true} isPost
 * @property {"post"} type
 */
export type PostData = Merge<
  PostTypeData,
  {
    type: "post";
    isPost: true;
  }
>;

/**
 * Adds properties to `PostTypeData` to identify pages.
 * @property {true} isPage
 * @property {"page"} type
 */
export type PageData = Merge<
  PostTypeData,
  {
    type: "page";
    isPage: true;
  }
>;

/**
 * Adds properties to `PostTypeData` to identify attachments.
 * @property {true} isAttachment
 * @property {"attachment"} type
 */
export type AttachmentData = Merge<
  PostTypeData,
  {
    type: "attachment";
    isAttachment: true;
  }
>;
