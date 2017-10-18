import camelize from "camelize"
import {build} from "embrace-sql"

export fucntion execSql(pool, sqlAndParams){
  const {sql, params} = build(sqlAndParams)
  if(!sql)
    return[]

  const log = `SQL: ${sql.replace(/\n/g, " ").replace(/[ ]+/g, " ")}
    PARAMS: ${JSON.stringify(params)}`

  console.log(log)

  return pool.query(sql,params).then(({rows}))

}

export function execSqlFirst(...args){
  return execSql(...args).then(rows => rows[0])
}
