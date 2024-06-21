import sys
import logging
import uuid
from typing import Union, AsyncGenerator
from typing_extensions import Annotated
from fastapi import FastAPI, HTTPException, Cookie, Response
from fastapi.responses import JSONResponse
from tortoise import Tortoise
from tortoise.contrib.fastapi import RegisterTortoise
from contextlib import asynccontextmanager
from models.chat import *
from config import get_config
from services import ConfidantsService #,ChatService
from poset import poset
from chat import chat

CHAT_COOKIE_KEY = "chat_id"


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:

    # app startup
    async with RegisterTortoise(
            app,
            db_url="sqlite://:memory:",
            modules={"models": ["models.chat","models.poset"]},
            generate_schemas=True,
            add_exception_handlers=True,
    ):
        # db connected
        print("db connected")
        yield
        # app teardown
        print("db disconnected")
    # db connections closed


try:

    conf = get_config()
    log = logging.getLogger(__name__)
    confidants_service = ConfidantsService()
    # chat_service = ChatService()
    app = FastAPI(title="Soverant POC API", lifespan=lifespan)
    app.include_router(poset.router)
    app.include_router(chat.router)

except Exception as e:
    print("the app is ended with this error: %s", str(e))
    sys.exit(1)




