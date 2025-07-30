// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh'],

  // Used when no locale matches
  defaultLocale: 'en',

  // Don't use locale prefixes in URLs
  localePrefix: 'never'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};