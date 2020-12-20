#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#/

# VARIABLES #

# Determine the filename:
this_file := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
this_dir := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
this_dir := $(patsubst %/,%,$(this_dir))

# Define the root project directory:
ROOT_DIR ?= $(this_dir)

# Define the root tools directory:
TOOLS_DIR ?= $(ROOT_DIR)/_tools

# Define the directory containing the entry point for Makefile dependencies:
TOOLS_MAKE_DIR ?= $(TOOLS_DIR)/make

# Define the subdirectory containing Makefile dependencies:
TOOLS_MAKE_LIB_DIR ?= $(TOOLS_MAKE_DIR)/lib

# Define the root build directory:
BUILD_DIR ?= $(ROOT_DIR)/build

# Define the directory for writing reports:
REPORTS_DIR ?= $(ROOT_DIR)/reports

# Define the root directory for storing temporary files:
TMP_DIR ?= $(ROOT_DIR)/lib/tmp

# Define the root configuration directory:
CONFIG_DIR ?= $(ROOT_DIR)/lib/etc

# Define the root directory for documentation:
DOCS_DIR ?= $(ROOT_DIR)/lib/docs

# Define the directory for public WWW assets:
# WWW_DIR ?= $(ROOT_DIR)/public

# Define the top-level directory containing executables:
LOCAL_BIN_DIR ?= $(ROOT_DIR)/bin

# Define the top-level directory containing node module dependencies:
NODE_MODULES ?= $(ROOT_DIR)/node_modules

# Define the top-level directory containing node module executables:
BIN_DIR ?= $(NODE_MODULES)/.bin

# Define the folder name convention for executables:
BIN_FOLDER ?= bin

# Define the folder name convention for documentation files:
DOCUMENTATION_FOLDER ?= docs

# Define the folder name convention for configuration files:
CONFIG_FOLDER ?= etc

# Define the folder name convention for build artifacts:
BUILD_FOLDER ?= build

# Define the folder name convention for temporary files:
TMP_FOLDER ?= tmp

# Define Node paths:
NODE_PATH ?= $(ROOT_DIR)


# DEPENDENCIES #

include $(TOOLS_MAKE_DIR)/Makefile
