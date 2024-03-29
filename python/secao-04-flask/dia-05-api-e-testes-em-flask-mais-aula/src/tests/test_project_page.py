import pytest
from app import app
from mocks.project import tasks_cards, task
from mocks.home import project_titles
from models.projectModel import ProjectModel
from mocks.task import task


@pytest.fixture
def client():
    return app.test_client()


@pytest.fixture
def response(client):
    res = client.get("/")
    base_route = "/task/"
    id_len = 24
    init = res.text.find(base_route) + len(base_route)
    final = init + id_len
    id = res.text[init:final]
    return client.get(f"/task/{id}")


def test_status_response(response):
    assert response.status_code == 200


def test_quantity_of_projects(response):
    assert response.text.count(tasks_cards) == 5


def test_project_title(response):
    assert project_titles[1] in response.text


def test_task_existence(response):
    assert task['open'] in response.text
    assert task['name'] in response.text
    assert task['status'] in response.text
    assert task['responsible'] in response.text 
    assert task['description'] in response.text
    assert task['close'] in response.text


def test_task_container(response):
    assert task['open'] in response.text


def test_task_name(response):
    assert task['name'] in response.text


def test_task_status(response):
    assert task['status'] in response.text


def test_task_responsible(response):
    assert task['responsible'] in response.text


def test_task_description(response):
    assert task['description'] in response.text


def test_task_percentage(response):
    assert task['percentage'] in response.text


def test_task_date(response):
    assert task['date'] in response.text
