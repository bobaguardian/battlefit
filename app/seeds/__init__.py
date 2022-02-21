from flask.cli import AppGroup
from .users import seed_users, undo_users
from .muscle_groups import seed_muscle_groups, undo_muscle_groups
from .units import seed_units, undo_units
from .exercises import seed_exercises, undo_exercises
from .logs import seed_logs, undo_logs
from .monsters import seed_monsters, undo_monsters
from .battles import seed_battles, undo_battles

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_muscle_groups()
    seed_units()
    seed_exercises()
    seed_logs()
    seed_monsters()
    seed_battles()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_muscle_groups()
    undo_units()
    undo_exercises()
    undo_logs()
    undo_monsters()
    undo_battles()
    # Add other undo functions here
