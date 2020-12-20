
# VARIABLES #

# Define the path to the root `package.json`:
ROOT_PACKAGE_JSON ?= $(ROOT_DIR)/package.json

# Define the path to the stdlib directory
STDLIB_DIR ?= $(ROOT_DIR)/tmp/stdlib

# Define the path to the _tools/esm directory
ESM_CREATE_DIST_DIR = $(STDLIB_DIR)/lib/node_modules/@stdlib/_tools/esm/create-dist

# Define the location of the create-dsit CLI command
ESM_CREATE_DIST = $(ESM_CREATE_DIST_DIR)/bin/cli

ESM_TMP_BUILD_DIR = dist

# TARGETS #

build-esm: $(ROOT_PACKAGE_JSON)
	mkdir -p $(ROOT_DIR)/tmp
	cd $(ESM_CREATE_DIST_DIR) && $(NODE) ./bin/cli -o dist
	cd $(ESM_CREATE_DIST_DIR)/dist/@stdlib && for i in *; do rm -rf $(ROOT_DIR)/$$i && mv $$i $(ROOT_DIR)/$$i; done

.PHONY: build-esm


#clean-esm:
	#$(DELETE) $(DELETE_FLAGS) $(NODE_MODULES)

#.PHONY: clean-esm
