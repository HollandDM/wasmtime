initSidebarItems({"constant":[["ELF_WASMTIME_ADDRMAP","A custom Wasmtime-specific section of our compilation image which stores mapping data from offsets in the image to offset in the original wasm binary."],["ELF_WASMTIME_TRAPS","A custom binary-encoded section of wasmtime compilation artifacts which encodes the ability to map an offset in the text section to the trap code that it corresponds to."],["FUNCREF_INIT_BIT","An “initialized bit” in a funcref table."],["FUNCREF_MASK","The mask we apply to all refs loaded from funcref tables."],["INTERRUPTED","Sentinel value indicating that wasm has been interrupted."],["VERSION","Version number of this crate."],["WASM32_MAX_PAGES","The number of pages (for 32-bit modules) we can have before we run out of byte index space."],["WASM64_MAX_PAGES","The number of pages (for 64-bit modules) we can have before we run out of byte index space."],["WASM_PAGE_SIZE","WebAssembly page sizes are defined to be 64KiB."]],"enum":[["CompileError","An error while compiling WebAssembly to machine code."],["EntityIndex","An index of an entity."],["EntityType","A type of an item in a wasm module where an item is typically something that can be exported."],["FlagValue","Value of a configured setting for a [`Compiler`]"],["GlobalInit","Globals are initialized via the `const` operators or by referring to another import."],["InitMemory","Argument to [`MemoryInitialization::init_memory`] indicating the current status of the instance."],["Initializer","Initialization routines for creating an instance, encompassing imports, modules, instances, aliases, etc."],["MemoryInitialization","The type of WebAssembly linear memory initialization to use for a module."],["MemoryStyle","Implemenation styles for WebAssembly linear memory."],["ModuleType","Different types that can appear in a module."],["SettingKind","Different kinds of [`Setting`] values that can be configured in a [`CompilerBuilder`]"],["TableInitialization","Table initialization data for all tables in the module."],["TableStyle","Implementation styles for WebAssembly tables."],["TrapCode","A trap code describing the reason for a trap."],["WasmError","A WebAssembly translation error."],["WasmType","WebAssembly value type – equivalent of `wasmparser`’s Type."]],"fn":[["lookup_file_pos","Lookup an `offset` within an encoded address map section, returning the original `FilePos` that corresponds to the offset, if found."],["lookup_trap_code","Decodes the provided trap information section and attempts to find the trap code corresponding to the `offset` specified."]],"macro":[["entity_impl","Macro which provides the common implementation of a 32-bit entity reference."],["for_each_libcall","Iterates through all `LibCall` members and all runtime exported functions."],["foreach_builtin_function","Helper macro to iterate over all builtin functions and their signatures."],["foreach_builtin_function","Helper macro to iterate over all builtin functions and their signatures."],["wasm_unsupported","Return an `Err(WasmError::Unsupported(msg))` where `msg` the string built by calling `format!` on the arguments to this macro."]],"mod":[["__core","The Rust Core Library"],["obj","Utilities for working with object files that operate as Wasmtime’s serialization and intermediate format for compiled modules."],["packed_option","Compact representation of `Option<T>` for types with a reserved value."],["wasmparser","A simple event-driven library for parsing WebAssembly binary files (or streams)."]],"struct":[["AddressMapSection","Builder for the address map section of a wasmtime compilation image."],["AnyfuncIndex","Index into the anyfunc table within a VMContext for a function."],["BoxedSlice","A slice mapping `K -> V` allocating dense entity references."],["BuiltinFunctionIndex","An index type for builtin functions."],["DataIndex","Index type of a passive data segment inside the WebAssembly module."],["DebugInfoData",""],["DefinedFuncIndex","Index type of a defined function inside the WebAssembly module."],["DefinedGlobalIndex","Index type of a defined global inside the WebAssembly module."],["DefinedMemoryIndex","Index type of a defined memory inside the WebAssembly module."],["DefinedTableIndex","Index type of a defined table inside the WebAssembly module."],["ElemIndex","Index type of a passive element segment inside the WebAssembly module."],["EntityList","A small list of entity references allocated from a pool."],["EntitySet","A set of `K` for densely indexed entity references."],["FilePos","A position within an original source file,"],["FuncIndex","Index type of a function (imported or defined) inside the WebAssembly module."],["FunctionBodyData","Contains function data: byte code and its offset in the module."],["FunctionInfo","Information about a function, such as trap information, address map, and stack maps."],["FunctionMetadata",""],["FunctionType","Type information about functions in a wasm module."],["Global","A WebAssembly global."],["GlobalIndex","Index type of a global variable (imported or defined) inside the WebAssembly module."],["HostPtr","Type representing the size of a pointer for the current compilation host"],["InstructionAddressMap","Single source location to generated address mapping."],["Iter","Iterate over all keys in order."],["IterMut","Iterate over all keys in order."],["Keys","Iterate over all keys in order."],["ListPool","A memory pool for storing lists of `T`."],["Memory","WebAssembly linear memory."],["MemoryIndex","Index type of a linear memory (imported or defined) inside the WebAssembly module."],["MemoryInitializer","A WebAssembly linear memory initializer."],["MemoryPlan","A WebAssembly linear memory description along with our chosen style for implementing it."],["Module","A translated WebAssembly module, excluding the function bodies and memory initializers."],["ModuleEnvironment","Object containing the standalone environment information."],["ModuleTranslation","The result of translating via `ModuleEnvironment`. Function bodies are not yet translated, and data initializers have not yet been copied out of the original buffer."],["NameSection",""],["PrimaryMap","A primary mapping `K -> V` allocating dense entity references."],["SecondaryMap","A mapping `K -> V` for densely indexed entity references."],["Setting","Description of compiler settings returned by [`CompilerBuilder::settings`]."],["SignatureIndex","Index type of a signature (imported or defined) inside the WebAssembly module."],["SparseMap","A sparse mapping of entity references."],["StackMap","A map for determining where live GC references live in a stack frame."],["StackMapInformation","The offset within a function of a GC safepoint, and its associated stack map."],["StaticMemoryInitializer","Similar to the above `MemoryInitializer` but only used when memory initializers are statically known to be valid."],["Table","WebAssembly table."],["TableIndex","Index type of a table (imported or defined) inside the WebAssembly module."],["TableInitializer","A WebAssembly table initializer segment."],["TablePlan","A WebAssembly table description along with our chosen style for implementing it."],["Tag","WebAssembly event."],["TagIndex","Index type of an event inside the WebAssembly module."],["Trampoline","Information about a compiled trampoline which the host can call to enter wasm."],["TrapEncodingBuilder","A helper structure to build the custom-encoded section of a wasmtime compilation image which encodes trap information."],["TrapInformation","Information about trap."],["Tunables","Tunable parameters for WebAssembly compilation."],["TypeIndex","Index type of a type inside the WebAssembly module."],["TypeTables","All types which are recorded for the entirety of a translation."],["VMOffsets","This class computes offsets to fields within `VMContext` and other related structs that JIT code accesses directly."],["VMOffsetsFields","Used to construct a `VMOffsets`"],["WasmFileInfo",""],["WasmFuncType","WebAssembly function type – equivalent of `wasmparser`’s FuncType."]],"trait":[["Compiler","An implementation of a compiler which can compile WebAssembly functions to machine code and perform other miscellaneous tasks needed by the JIT runtime."],["CompilerBuilder","Abstract trait representing the ability to create a `Compiler` below."],["EntityRef","A type wrapping a small integer index should implement `EntityRef` so it can be used as the key of an `SecondaryMap` or `SparseMap`."],["PtrSize","Trait used for the `ptr` representation of the field of `VMOffsets`"],["SparseMapValue","Trait for extracting keys from values stored in a `SparseMap`."]],"type":[["Dwarf",""],["SparseSet","A sparse set of entity references."],["WasmResult","A convenient alias for a `Result` that uses `WasmError` as the error type."]]});