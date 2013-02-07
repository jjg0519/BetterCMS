﻿using System;

namespace BetterCms.Core.Models
{
    /// <summary>
    /// Defines interface to access basic page properties.
    /// </summary>
    public interface IPage : IEntity
    {
        /// <summary>
        /// Gets a value indicating whether this page is published.
        /// </summary>
        /// <value>
        /// <c>true</c> if this page is published; otherwise, <c>false</c>.
        /// </value>
        bool IsPublished { get; }

        /// <summary>
        /// Gets a value indicating whether this page is available for not authenticated users.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this page is available for not authenticated users; otherwise, <c>false</c>.
        /// </value>
        bool IsPublic { get; }

        /// <summary>
        /// Gets a value indicating whether this page has SEO meta data.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this page has SEO; otherwise, <c>false</c>.
        /// </value>
        bool HasSEO { get; }

        /// <summary>
        /// Gets the title.
        /// </summary>
        /// <value>
        /// The title.
        /// </value>
        string Title { get; }

        /// <summary>
        /// Gets the page URL.
        /// </summary>
        /// <value>
        /// The page URL.
        /// </value>
        string PageUrl { get; }
    }
}
