# AWS-S3-Upload and download Files Using Spring-boot and Angular

## FileAngular1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Backend Spring=boot project with AWS-S3

Here we  will be going to see how can we store the files in the Amazon S3 bucket.
Here we do like.
1. How to upload files to the S3 bucket.
2. How to download files from the S3 bucket.
3. How to delete files from S3
4. How to get the list of available files in the S3 bucket.
Herer I  implemented the solution in spring boot and will use the AWS SDK to interact with the S3 bucket.


### Add SDK in Dependency 

```
<dependency>
    <groupId>com.amazonaws</groupId>
    <artifactId>aws-java-sdk</artifactId>
    <version>1.11.163</version>
</dependency>

```


Create AWS account

Create User from IAM and assign policy AWSS3fullaccess programatically ( So this user will get the all S3 bucket access through CLI or progam )

download the access key and Access ID

Change the access key and access ID in application.yml file

Create Bucket from S3 service with default configuration

provide the bucket name and endpoint url of this bucket in the application.yml file

