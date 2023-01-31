from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

# create a new instance of the Firefox driver
driver = webdriver.Firefox()

# navigate to the Advert creation page
driver.get("http://localhost:3000/add-offer/2")

# enter the required information for the advert
title_field = driver.find_element_by_id("title")
title_field.send_keys("Maths")

description_field = driver.find_element_by_id("description")
description_field.send_keys("I am offering Math tutoring services for students of all levels.")

tarif_field = driver.find_element_by_id("tarif")
tarif_field.send_keys("200")

wilaya_field = driver.find_element_by_id("wilaya")
wilaya_field.send_keys("Alger")

city_field = driver.find_element_by_id("commune")
city_field.send_keys("Alger")

category_field = driver.find_element_by_id("category")
category_field.send_keys("primaire")

type_field = driver.find_element_by_id("type")
type_field.send_keys("offline")

address_field = driver.find_element_by_id("address")
address_field.send_keys("test-address")

# submit the form
submit_button = driver.find_element_by_xpath("//input[@type='submit']")
submit_button.click()

# wait for the page to load
time.sleep(5)

# check that the Advert was successfully created by checking for a success message
success_message = driver.find_element_by_xpath("//div[@class='alert alert-success']").text
assert "Advert was created successfully." in success_message

# close the browser
driver.close()
