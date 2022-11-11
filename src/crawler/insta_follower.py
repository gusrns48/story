import selenium
import time
from selenium import webdriver
from bs4 import BeautifulSoup

driver = webdriver.Chrome()

driver.get("https://www.instagram.com/rkdgus_9/following/")

soup = BeautifulSoup(driver.page_source, 'html.parser')
followers = soup.findAll('span')
# followers_text = []
# for follower in followers:
#     followers_text.append(follower.get_text())

print(followers)