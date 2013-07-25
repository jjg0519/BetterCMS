﻿/*jslint vars: true*/
/*global describe, it, expect, waits, waitsFor, runs, afterEach, spyOn, $*/

describe('Blog: Authors', function () {
    'use strict';

    it('02000: Should get a list of authors', function () {
        var url = '/bcms-api/authors/',
            result,
            ready = false;

        var data = {
            filter: {
                where: [{ field: 'Name', operation: 'StartsWith', value: '_0000_' }]
            },
            order: {
                by: [{ field: 'Name' }]
            },
            take: 2,
            skip: 1,
            includeUnpublished: true
        };

        runs(function () {
            api.get(url, data, function (json) {
                result = json;
                ready = true;
            });
        });

        waitsFor(function () {
            return ready;
        }, 'The ' + url + ' timeout.');

        runs(function () {
            expect(result).not.toBeNull();
            expect(result.data).not.toBeNull();
            expect(result.data.totalCount).toBe(4);
            expect(result.data.items.length).toBe(2);

            api.expectBasePropertiesAreNotNull(result.data.items[0]);
            api.expectBasePropertiesAreNotNull(result.data.items[1]);
            
            expect(result.data.items[0].name).toBe('_0000_Author_2');
            expect(result.data.items[0].imageId).not.toBeNull();
            expect(result.data.items[0].imageUrl).not.toBeNull();
            expect(result.data.items[0].imageThumbnailUrl).not.toBeNull();
            expect(result.data.items[0].imageCaption).toBe('Image caption for _0000_Author_2');
            
            expect(result.data.items[1].name).toBe('_0000_Author_3');
            expect(result.data.items[1].imageId).toBeNull();
            expect(result.data.items[1].imageUrl).toBeNull();
            expect(result.data.items[1].imageThumbnailUrl).toBeNull();
            expect(result.data.items[1].imageCaption).toBeNull();
        });
    });
    
    it('02001: Should get an author by id', function () {
        var url = '/bcms-api/authors/b82a9428b40047c498a9a20500b7a276',
            result,
            ready = false;

        runs(function () {
            api.get(url, null, function (json) {
                result = json;
                ready = true;
            });
        });

        waitsFor(function () {
            return ready;
        }, 'The ' + url + ' timeout.');

        runs(function () {
            expect(result).not.toBeNull();

            var author = result.data;
            expect(author).not.toBeNull();
            api.expectBasePropertiesAreNotNull(author);
            
            expect(author.name).toBe('_0000_Author_2');
            expect(author.imageId).not.toBeNull();
            expect(author.imageUrl).not.toBeNull();
            expect(author.imageThumbnailUrl).not.toBeNull();
            expect(author.imageCaption).toBe('Image caption for _0000_Author_2');
        });
    });
});