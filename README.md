# Full-Stack Developer Bootcamp Module 14 - Challenge: Tech-Blog

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Application Screenshots](#application-screenshots) 


## Description

The Tech-Blog is an Express-, Postgres- and Sequelize-based web-application that provides a browser-based interface for the creation, view, editing, and destruction (CRUD) of User-generated Blog Entries. Blog Entries are maintained in a Postgres database, managed using Sequelize. Application webpages are rendered using Handlebars, and formatted through traditional CSS stylesheets. 

The application is available through a local instance (i.e., not deployed through a publically-accessible web-instance, such as Heroku), and data is accessible through that instance, but the code base may be deployed through a service, such as Heroku, to allow for public access. (A GitHub Pages instance is available for the purposes of evaluation.)

Data managed through the code base is maintained and managed through a hosted Postgres database, utilizing Sequelize as an ORM to communicate with the Node.js code base. If the application is run locally, the Postgres database will be similarly local, while publicly-deployed instances will support a remotely-hosted database backbone, if configured.

The Tech-Blog source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Data is created, viewed, updated and destroyed through the browser-based UI, using webpages dedicated to such actions.

Blog Entries are created through a dedicated  Entries page; Entries in aggregrate are viewed through the Tech-Blog homepage (Index).

The Tech-Blog features a sequential, timeline-based view of Blog Entries.

(Data may also be created, viewed updated and destroyed through an API platform such as Postman or Insomnia.)

Data may also be viewed through the Postgres shell, under the seeded database, techblog_db, as well as through the app webpages and API platforms.

Because Tech-Blog data is stored a local Postgres instance, data will persist across User sessions on individual, hosting computers and will be visible to all Users of the local Postgres instance on individual computers.


## Installation

The Tech-Blog source code may be downloaded from its GitHub repository, and run directly by a hosting computer.

No Installation of the Tech-Blog is required; the app is fully browser-based, accessed through any modern browser that supports JavaScript (Nodejs).

However, local computers must hold an installation of Node.js, Handlebars, Sequelize and Postgres in order the run the Tech-Blog application.


## Usage

The Tech-Blog is intended for use by one or more Users to record User Entries, which will be held locally, and persist across multiple sessions. 

All Users of the Tech-Blog on a local computer will have full visibility to all Users' data.


## Credits and Code Source

Routes-management code, within the Routes folder, was substantively contributed to by Course Instructor and Tutors, who provided guidance on appropriate Routes and Sequelize syntax to execute CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

`console.log` output of data specific to particular data requests and responses; see Routes, and Models.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/14_Challenge_Tech-Blog.git


## GitHub Pages Location




## Application Screenshots

![Tech-Blog: Homepage - Screenshot 01](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-01_Database-Seed-Process.png?raw=true "E-Commerce Back-End: Data Seed Process")

![Tech-Blog: Homepage - Screenshot 02](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-02_Database-Seed-Complete.png?raw=true "E-Commerce Back-End: Data Seed Process")

![Tech-Blog: Homepage - Screenshot 03](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-03_Data-Retrieval-Tags.png?raw=true "E-Commerce Back-End: Data Retrieval - Tags (GET Request)")

![Tech-Blog: Homepage - Screenshot 04](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-04_Data-Creation-Categories.png?raw=true "E-Commerce Back-End: Data Creation - Categories (POST Request)")

![Tech-Blog: Homepage - Screenshot 05](./assets/images/E-Commerce-Back-End_Express-Sequelize-App_Screenshot-05_Data-Update-Categories.png?raw=true "E-Commerce Back-End: Data Update - Categories (PUT Request)")
