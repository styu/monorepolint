/*!
 * Copyright (c) 2018 monorepo-lint (http://monorepo-lint.com). All Right Reserved.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 *
 */

import { readFileSync } from "fs";

export function readJson(path: string) {
  const contents = readFileSync(path, "utf-8");
  return JSON.parse(contents);
}