FROM openjdk:18-jdk-alpine as builder

WORKDIR /app/spring-boot-backend-apirest

COPY ./pom.xml /app
COPY ./spring-boot-backend-apirest/.mvn ./.mvn
COPY ./spring-boot-backend-apirest/mvnw .
COPY ./spring-boot-backend-apirest/pom.xml .

RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/
#RUN ./mvnw dependency:go-offline
COPY ./spring-boot-backend-apirest/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:18-jdk-alpine

WORKDIR /app


COPY  --from=builder /app/spring-boot-backend-apirest/target/spring-boot-backend-apirest-0.0.1-SNAPSHOT.jar .
EXPOSE 8001

ENTRYPOINT ["java", "jar", "spring-boot-backend-apirest-0.0.1-SNAPSHOT.jar"]