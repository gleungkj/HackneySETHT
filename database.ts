import createConnectionPool, {sql} from "@databases/pg";

export {sql}

export const db = createConnectionPool('postgres://postgres@localhost:5432/sampledb')