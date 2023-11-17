import createConnectionPool, {sql} from "@databases/pg";

export {sql}

// would prefer not to hard-code this but can't figure out why .env parameters cannot be used here properly
export const db = createConnectionPool(`postgres://postgres@localhost:5433/sampledb`)