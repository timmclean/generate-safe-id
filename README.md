# generate-safe-id

A command line tool and Node.js library for generating globally unique and
cryptographically unpredictable identifiers.

Identifiers consist entirely of uppercase and lowercase letters (a-z, A-Z),
digits (0-9), hyphens ("-"), and underscores ("_"), making them safe in URLs
and other contexts.

## Why not UUIDs?

Random UUIDs (UUIDv4) do not have enough entropy to be universally unique
(ironic, eh?). Random UUIDs have only 122 bits of entropy, which suggests
that a duplicate will occur after only 2^61 IDs.  Additionally, some UUIDv4
implementations do not use a cryptographically strong random number generator.

This library generates 240-bit IDs using the Node.js crypto RNG, suggesting the
first duplicate will occur after generating 2^120 IDs. Based on the current
energy production of the human race, this threshold will be impossible to cross
for the foreseeable future.

## Usage

Installation with npm:

```
$ npm install generate-safe-id
```

Using `generate-safe-id` from Node.js:

```
var generateSafeId = require('generate-safe-id');

var id = generateSafeId();
// id == "zVPkWyvgRW-7pSk0iRzEhdnPcnWfMRi-ZcaPxrHA"
```

Alternatively, this library can be used from the command line when installed
globally:

```
$ npm install -g generate-safe-id
$ generate-safe-id
teErzw09Am-Yq_ylT8gb3zBCbpnSWgeS-m_xv5-v
```

Use the `-n` flag to prevent the output from being terminated with a line break
(useful for scripting).

```
$ generate-safe-id -n
wiIVSSXbbnDp5NJ_x7Iu1VC2iF34WZRtt9fXh13C
```

## Reporting security vulnerabilities

Contact Tim McLean at `[first name]@[first name][last name].net` ([PGP key](https://keybase.io/timmclean)).

Note: this ID generator is not constant time (see [issue #1](https://github.com/timmclean/generate-safe-id/issues/1)).
