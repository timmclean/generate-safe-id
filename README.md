#generate-safe-id

Generates globally unique and cryptographically unpredictable identifiers.

Identifiers consist entirely of uppercase and lowercase letters (a-z, A-Z),
digits (0-9), hyphens ("-"), and underscores ("_"), making them safe in URLs
and other contexts.

##Why not UUIDs?

Random UUIDs (UUIDv4) do not have enough entropy to be universally unique
(ironically enough). Random UUIDs have only 122 bits of entropy, which suggests
that a duplicate will occur after only 2^61 IDs.  Additionally, some UUIDv4
implementations do not use a cryptographically strong random number generator.

This library generates 240-bit IDs, suggesting the first duplicate will occur
after generating 2^120 IDs. Based on the current energy production of the human
race, this threshold will be impossible to cross for the foreseeable future.

##Usage

```
npm install generate-safe-id
```

```
var generateSafeId = require('generate-safe-id');

var id = generateSafeId();
```

Alternatively, this library can be used from the command line when installed
globally:

```
npm install -g generate-safe-id
generate-safe-id
```

Use the `-n` flag to prevent the output from being terminated with a line break
(useful for scripting).

```
generate-safe-id -n
```
