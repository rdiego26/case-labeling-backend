# case-labeling-backend
Backend for EHR case labeling.

![EHR](https://belitsoft.com/uploads/images/blog/posts/previews/image_155930182239.jpg)

# Steps to run(for dev)
1. Resolve dependencies `npm install` .
2. UP container: `docker-compose up` . (or user `docker-compose up --force-recreate` to force clean cache).
3. Run seed task(if you need) in another terminal `npm run seed`.

# Scripts
- Generate coverage report: `docker-compose run app npm run coverage`
- Run tests: `docker-compose run app npm test`

---

# Considerations / Next Improvements / Questions
- .....