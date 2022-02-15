from flask.cli import AppGroup
from .users import seed_users, undo_users
from .muscle_groups import seed_muscle_groups, undo_muscle_groups
from .units import seed_units, undo_units
from .exercises import seed_exercises, undo_exercises

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
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_muscle_groups()
    undo_units()
    undo_exercises()
    # Add other undo functions here
