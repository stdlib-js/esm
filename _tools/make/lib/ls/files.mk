
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_files_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_FILES_FLAGS ?= \
	-type f \
	-name "$(FILES_PATTERN)" \
	-regex "$(FILES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(WWW_DIR)/*"

ifneq ($(OS), Darwin)
	FIND_FILES_FLAGS := -regextype posix-extended $(FIND_FILES_FLAGS)
endif

# Define a command for finding files:
FIND_FILES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS)

# Define the list of files:
FILES ?= $(shell $(FIND_FILES_CMD))


# TARGETS #

# List all files.
#
# This target prints a list of all files, excluding the `node_modules`, `build`, `reports`, and hidden directories.

list-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS) $(find_print_files_list)

.PHONY: list-files
