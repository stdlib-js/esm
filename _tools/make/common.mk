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

# VERBOSITY #

ifndef VERBOSE
	QUIET := @
endif


# ENVIRONMENTS #

# Determine the OS:
#
# [1]: https://en.wikipedia.org/wiki/Uname#Examples
# [2]: http://stackoverflow.com/a/27776822/2225624
OS ?= $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring CYGWIN,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring Windows_NT,$(OS)))
	OS := WINNT
endif
endif
endif
endif

# Define whether the make commands are running on a hosted continuous integration service:
ifeq ($(TRAVIS), true)
	CI_SERVICE ?= travis
else
ifeq ($(APPVEYOR), true)
	CI_SERVICE ?= appveyor
else
	CI_SERVICE ?= none
endif
endif


# COMMANDS #

# Define whether delete operations should be safe (i.e., deleted items are sent to trash, rather than permanently deleted):
SAFE_DELETE ?= false

# Define the delete command:
ifeq ($(SAFE_DELETE), true)
	# FIXME: -rm -rf
	DELETE := -rm
	DELETE_FLAGS := -rf
else
	DELETE ?= -rm
	DELETE_FLAGS ?= -rf
endif

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the command for extracting tarfiles:
TAR ?= tar

# Define the command to `cat` a file:
CAT ?= cat

# Define the command to copy files:
CP ?= cp

# Define the command to recursively sync directories:
RSYNC_RECURSIVE ?= rsync -r

# Define the `git` command:
GIT ?= git

# Define the command for staging files:
GIT_ADD ?= $(GIT) add

# Define the command for committing files:
GIT_COMMIT ?= $(GIT) commit

# Determine the `open` command:
ifeq ($(OS), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Define the command for `node`:
NODE ?= node

# Define the command for `npm`:
NPM ?= npm
