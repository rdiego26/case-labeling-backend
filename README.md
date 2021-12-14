# case-labeling-backend
Backend for [EHR case labeling](https://github.com/rdiego26/case-labeling-frontend).

![EHR](https://belitsoft.com/uploads/images/blog/posts/previews/image_155930182239.jpg)

# Steps to run(for dev)
1. Resolve dependencies `npm install` .
2. UP container: `docker-compose up` . (or user `docker-compose up --force-recreate` to force clean cache).
3. Run seed task(if you need) in another terminal `npm run seed`.

# Scripts
- Generate coverage report: `docker-compose run app npm run coverage`
- Run tests: `docker-compose run app npm test`

# Considerations / Next Improvements / Questions
- Solution
  - Implement some mechanism to "lock" the case while user are labeling, to prevent other user get the same case
  - Implement some mechanism(maybe [RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)) to better control about the permissions(some doctors should see cases from our patients, etc)
  - Add more test cases 
- Arch
  - Migrate to Nest.js
  - Implement typescript (and remove json schema)
- Considerations for production
  - Integrate with some log aggregation tool, like [Humio](https://www.humio.com/) or [Splunk](https://www.splunk.com/)
  - Implement migration to better control about the database structure changes
  - Integrate with some APM tool, like [New Relic](https://newrelic.com/) or [DataDog](https://www.datadoghq.com/)
  - Implement a CI/CD workflow
- Question
  - During labeling I allowed the doctor change the description(but if it's wrong, we can update the code)
