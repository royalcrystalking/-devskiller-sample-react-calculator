# Devskiller programming task sample - React

## Introduction

With [Devskiller.com](https://devskiller.com) you can assess your candidates'
programming skills as a part of your recruitment process. We have found that
programming tasks are the best way to do this and have built our tests
accordingly. The way our test works is your candidate is asked to modify the
source code of an existing project.

During the test, your candidates have the option of using our browser-based
code editor and can build the project inside the browser at any time. If they
would prefer to use an IDE they are more comfortable with, they can also
download the project code or clone the project’s Git repository and work
locally.

You can check out this short video to see the test from the [candidate's
perspective](https://devskiller.zendesk.com/hc/en-us/articles/360019534639-How-the-TalentScore-test-looks-like-from-the-candidate-perspective).

This repo contains a sample project for JavaScript and below you can
find a detailed guide for creating your own programming project.

**Please make sure to read our [Getting started with programming
projects](https://devskiller.zendesk.com/hc/en-us/articles/360019531059-Getting-started-with-Programming-Tasks) guide first**

## Technical details

Any **JavaScript** project can be used as a programming task. We support **Karma**
for unit tests and **npm** for managing external dependencies.

It is also possible to use cli tools like `Vue CLI` or `Create React App` to
scaffold a project.

The project will be executed with the following command:

```sh
npm install && npm test
```

**When compressing the project contents into a ZIP archive please skip
`./node_modules` directories.**

## Automatic assessment

It is possible to automatically assess the solution posted by the candidate.
Automatic assessment is based on unit tests results and code quality
measurements.

There are two kinds of unit tests:

1. **Candidate tests** - unit tests that the candidate can see during the test
   should be used only for basic verification and to guide the candidate in
   understanding the requirements of the project. Candidate tests WILL NOT be used
   to calculate the final score.
2. **Verification tests** - unit tests that the candidate can’t see during the
   test. Files containing verification tests will be added to the project after
   the candidate finishes the test and will be executed during the verification
   phase. The results of the verification tests will be used to calculate the
   final score.

Once the solution is developed and submitted, the platform executes
verification tests and performs static code analysis.

## Devskiller project descriptor

Programming tasks can be configured with the Devskiller project descriptor file:

1. Create a `devskiller.json` file.
2. Place it in the root directory of your project.

Here is an example project descriptor:

```json
{
  "verification": {
    "testNamePatterns": [".*verify_pack.*"],
    "pathPatterns": ["**verify_pack**"]
  },
  "readOnlyFiles" : [ "package.json", "test/**" ]
}
```

You can find more details about the `devskiller.json` descriptor in our
[documentation](https://devskiller.zendesk.com/hc/en-us/articles/360019530419-Programming-task-project-descriptor).

## Automatic verification with verification tests

The solution submitted by the candidate may be verified using automated tests.
You’ll just have to define which tests should be treated as verification tests.

All files classified as verification tests will be removed from the project
prior to inviting the candidate.

To define verification tests, you need to set two configuration properties in
`devskiller.json`:

- `testNamePatterns` - an array of RegEx patterns which should match all the
  names of the verification tests.
- `pathPatterns` - an array of GLOB patterns which should match all the files
  containing verification tests. All the files that match defined patterns will
  be deleted from candidates' projects and will be added to the projects during
  the verification phase. These files will not be visible to the candidate during
  the test.

In our sample project all verification tests are in a test suite are prefixed
with `verify_pack` string and are located in files under `verify_pack`
directory. In this case the following will suffice::


```json
"testNamePatterns" : [".*verify_pack.*"],
"pathPatterns": ["**verify_pack**"]
```
