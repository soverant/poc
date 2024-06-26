import logging
from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Configs(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8')

    log_level: str = Field("DEBUG")
    host: str = Field("0.0.0.0")
    port: int = Field(8000)
    environment: str = Field("development")
    orm_db_url: str = Field("sqlite://./data/orm_database.db")
    unmanaged_db_url: str = Field("sqlite://./data/um_database.db")
    openai_token: str = Field()

    def get_log_level(self):
        return getattr(logging, self.log_level, logging.INFO)

    @property
    def is_dev(self):
        return self.environment is "development"


conf = Configs()


def get_config():
    return conf
