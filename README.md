# greenEarth

A web application to show the changes in polar icecaps over the years due incearing global warming and the threats that it poses
on our future.

App Link: [https://greenearthnewrelic.herokuapp.com/](https://greenearthnewrelic.herokuapp.com/)

It's a flask based web application and it shows statistical study on a dataset provided by [National Snow and Ice Data Center](https://nsidc.org/).

The data can be downloaded from the application's website or via this [link](https://greenearthnewrelic.herokuapp.com/static/seaice.csv).
The dataset provides us extent of polar icecaps year wise from 1979 to 2020.

To set this application locally:

```sh
git clone https://github.com/sisodiya2421/greenEarth.git

cd greenEarth/

python3 -m venv env

source env/bin/activate

pip install -r requirements.txt

python flask_app.py
````
