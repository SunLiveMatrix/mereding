## Process this file with automake to produce Makefile.in

## Created by Anjuta

AM_CPPFLAGS = \
	-DPACKAGE_LOCALE_DIR=\""$(localedir)"\" \
	-DPACKAGE_SRC_DIR=\""$(srcdir)"\" \
	-DPACKAGE_DATA_DIR=\""$(pkgdatadir)"\" \
	$(CUTE_CFLAGS)

AM_CFLAGS =\
	 -Wall\
	 -g

lib_LTLIBRARIES = libcute.la


libcute_la_SOURCES = \
	lib.c

libcute_la_LDFLAGS = 

libcute_la_LIBADD = $(CUTE_LIBS)


if PLATFORM_WIN32
libcute_la_LDFLAGS += -no-undefined
endif

if NATIVE_WIN32
libcute_la_LDFLAGS += -export-dynamic
endif

include_HEADERS = \
	cute.h

pkgconfigdir = $(libdir)/pkgconfig
pkgconfig_DATA = cute-0.1.pc

EXTRA_DIST = \
	cute-0.1.pc.in
