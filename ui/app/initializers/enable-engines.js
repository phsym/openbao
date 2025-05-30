/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import config from '../config/environment';

export function initialize(/* application */) {
  // attach mount hooks to the environment config
  // context will be the router DSL
  config.addRootMounts = function () {};
}

export default {
  initialize,
};
