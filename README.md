## Getting Started

This project uses Yarn workspaces. 
You need to install yarn first if you do not have it.

```
npm install -g yarn
```

## Installing Dependencies

```
yarn
```


## Database
### Using Docker
```
docker-compose up -d
docker exec -i procurified_assessment_postgres /bin/bash -c "PGPASSWORD=postgres psql -U postgres procurified -a" < ./api/src/sql/init.sql
```

### Using a local Postgres instance

```
psql -U postgres
CREATE DATABASE procurified;
\q
```

```
psql -U postgres -d procurified -a -f ./api/src/sql/init.sql
```

Alternatively, a `pg_dump` has been included in this repository which can be restored.

## Development

```
yarn start
```

## Building for Production

```
yarn build
```
