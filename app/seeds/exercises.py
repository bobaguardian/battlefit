from app.models import db, Exercise


def seed_exercises():
    # Abs
    crunch = Exercise(user_id=1, muscle_group_id=1, name="Crunch",
        image="https://battle-fit.s3.amazonaws.com/9e83c2a971874ef8ba55c6ae562a1ef3.jpg",
        description="Lie down on the floor face up with your knees bent 90 degrees. Place your hands behind your head. Lift your shoulders towards your legs, keeping your lower back on the floor.")

    plank = Exercise(user_id=1, muscle_group_id=1, name="Plank",
        image="https://battle-fit.s3.amazonaws.com/9028456328e94ddbae8d7553dd7a609d.jpg",
        description="Get into a pushup-like position on the floor but use your forearms and toes to hold your weight up.  Your arms should be shoulder width apart and your body should be a straight line with your back flat.")

    leg_raise = Exercise(user_id=1, muscle_group_id=1, name="Leg Raise",
        image="https://battle-fit.s3.amazonaws.com/e900924fc9f549a497da0d711612836b.jpg",
        description="Lie down flat with your back on the floor. Place your hands under your butt. Raise your legs up without bending them. Stop when your legs are about 90 degrees with your torso then slowly lower your legs back down")

    # Back

    pull_up = Exercise(user_id=1, muscle_group_id=2, name="Pull-Up",
        image="https://battle-fit.s3.amazonaws.com/583e5a7158ef4583b0a83867b434dcf9.jpg",
        description="Grab the pull-up bar with an overhand grip. Place your hands around shoulder width apart and pull yourself up until your chin is at or above the bar. Slowly lower yourself back down til your arms are fully extended.")

    deadlift = Exercise(user_id=1, muscle_group_id=2, name="Deadlift",
        image="https://battle-fit.s3.amazonaws.com/9b044e454e68412b99e0e6ade08a10c5.jpg",
        description="Place your feet shoulder width apart with dumbbells or a barbell in front of your feet. Grip them and with thighs parallel to the floor and back straight, stand up with the weights keeping them close to your body. Once you reach a standing position with the dumbbells at your thighs, slowly squat back down, lowering the weights back to the floor.")

    # Biceps
    bicep_curl = Exercise(user_id=1, muscle_group_id=3, name="Bicep Curl",
        image="https://battle-fit.s3.amazonaws.com/c4f77f82d67840d3b18090c6abd3557d.jpg",
        description="Stand up straight with your legs shoulder width apart. Using an underhand grip on the weights, hold it down in front of your thighs. Bend at the elbows so that only your forearms are moving to curl the weights to your shoulders. Hold for a brief moment at the top before slowly lowering the weights back at starting position.")

    hammer_curl = Exercise(user_id=1, muscle_group_id=3, name="Hammer Curl",
        image="https://battle-fit.s3.amazonaws.com/a9a946790b6d4cb8bc56ff8d5109d453.jpg",
        description="Stand up straight with your legs shoulder width apart. Grab a dumbbell in each hand with a neutral grip (palms facing each other). Start with the dumbbells at your side and slowly bend both elbows and flex your bicep to bring the dumbbells up to your shoulders. Then slowly lower the dumbbels back down to your side.")

    # Calves
    calf_raise = Exercise(user_id=1, muscle_group_id=4, name="Calf Raise",
        image="https://battle-fit.s3.amazonaws.com/74371d6437be407895ee4ecae73c7f17.jpg",
        description="Stand up straight with your legs shoulder width apart with dumbbells on each hand with a neutral grip. While standing up straight, raise your heels up and hold for a second before lowering them back down.")

    # Cardio
    running = Exercise(user_id=1, muscle_group_id=5, name="Running", image="https://battle-fit.s3.amazonaws.com/e66215ef0c4f42c98f592e52ada2e9e2.jpg")
    stationary_bike = Exercise(user_id=1, muscle_group_id=5, name="Stationary Bike", image="https://battle-fit.s3.amazonaws.com/7bd1ee7b19be475683aeea1891316f16.jpg")
    jump_rope = Exercise(user_id=1, muscle_group_id=5, name="Jump Rope", image="https://battle-fit.s3.amazonaws.com/1b218f7d09904356b0cbc70d807246bf.jpg")


    # Chest
    push_up = Exercise(user_id=1, muscle_group_id=6, name="Push-Up",
        image="https://battle-fit.s3.amazonaws.com/007d79474cfe40e18dd3c74fef8d35e9.jpg",
        description="Position your body so that you're facing the floor, holding yourself up with your hands and toes.  Start with your arms straight and while keeping your back straight, lower yourself down towards the floor until your arms are 90 degrees to the floor. Then push yourself back up, making sure your back is not arched.")

    bench_press = Exercise(user_id=1, muscle_group_id=6, name="Bench Press",
        image="https://battle-fit.s3.amazonaws.com/89afa32fd93e419dbee074268f8aec34.png",
        description="Lie down on the bench facing up and grab your weights. Your hands should be shoulder width apart with an overhand grip. Your elbows should be at a 90 degree angle. Push upwards until your arms are extended. Slowly bring your arms back down until your shoulders are back at the 90 degee angle.  Keep focus on using your chest muscles during this exercise.")


    # Forearms
    farmers_walk = Exercise(user_id=1, muscle_group_id=7, name="Farmers Walk",
        image="https://battle-fit.s3.amazonaws.com/59f8ab385c4740b397bd51c536a43525.jpg",
        description="Grip a weight in each hand and while standing up straight, start walking laps, keeping your arms straight down at your sides.")

    # Glutes
    flutter_kicks = Exercise(user_id=1, muscle_group_id=8, name="Flutter Kicks",
        image="https://battle-fit.s3.amazonaws.com/5975f556554845a1a5b2535f98bd5f39.jpg",
        description="Lie face down on a bench with your hips on the edge, hold onto the bench with your hands. Your legs should hang off the end of the bench with your toes pointing down. Flex your abs while squeezing your glutes and hamstrings. Alternate kicking one leg back and up while keeping your hips on the bench.")

    bridge = Exercise(user_id=1, muscle_group_id=8, name="Bridge",
        image="https://battle-fit.s3.amazonaws.com/9076a4d44205457fb75dbfd7af057e2b.jpg",
        description="Lay on your back with your knees bent and your feet flat on the floor. Your arms should be at your sides flat on the floor. Tighten your abs and thrust upwards so that your body forms a straight line from your shoulders to knees. Hold the position for a bit before slowly letting yourself back down.")

    # Legs
    squat = Exercise(user_id=1, muscle_group_id=9, name="Squat",
        image="https://battle-fit.s3.amazonaws.com/2426774e49104062ad4fe19dea467c22.jpg",
        description="With your feet shoulder width apart, slowly squat down by bending your knees until your thighs are parallel to the floor. Then, slowly rise back up to starting position.  Make sure to keep your back straight during this exercise.")

    lunge = Exercise(user_id=1, muscle_group_id=9, name="Lunge",
        image="https://battle-fit.s3.amazonaws.com/71f412ab622f414494f00568751cc55b.jpg",
        description="Stand up straight and step forward with one leg while squatting down. Keep your torso and back straight and head facing forward. Push with your leg back up to the starting position.  Alternate legs.")

    # Shoulders
    arnold_press = Exercise(user_id=1, muscle_group_id=10, name="Arnold Press",
        image="https://battle-fit.s3.amazonaws.com/4b463c3cde454e75a250e6dad2f8411a.jpg",
        description="Sit up straight with a dumbbell on each hand. Begin by gripping the dumbbels in front of your chest with your palms facing each other. Press upwards while rotating your arms. When you reach the top, your palms should be facing away from you. Lower the dumbbells by reversing the motion.")

    lateral_raise = Exercise(user_id=1, muscle_group_id=10, name="Lateral Raise",
        image="https://battle-fit.s3.amazonaws.com/ddef0b36b6ab44f8996897363cb0baa2.jpg",
        description="Stand up straight with your legs shoulder width apart. Grab a dumbbell in each hand and start with your arms extended down to your side. Raise the dumbbels out to your sides while keeping your arms straight and stop when they're parallel to the floor. Then slowly lower the dumbbells back down to your side.")

    shrug = Exercise(user_id=1, muscle_group_id=10, name="Shrug",
        image="https://battle-fit.s3.amazonaws.com/c67b596aa1b24e99a773882af1c22292.jpg",
        description="Stand up straight and grab a dumbbell in each hand with an overhand grip. Keep your arms extended to your side and use your shoulders to lift the dumbbells while keeping your arms extended. Hold for a second before releasing your shoulders back down.")

    # Triceps
    dip = Exercise(user_id=1, muscle_group_id=10, name="Tricep Dip",
        image="https://battle-fit.s3.amazonaws.com/8892975724964d8393d48a7ae45979d1.jpg",
        description="Grab the handles on the dip machine or a ledge and hold yourself up using only your hands. Your elbows should be bent and your legs behind you. Push yourself up so that your arms are extended. Slowly lower yourself back down to starting position.")

    overhead_extension = Exercise(user_id=1, muscle_group_id=11, name="Overhead Extension",
        image="https://battle-fit.s3.amazonaws.com/527678f2e4b3487eb366aafcf83a794f.jpg",
        description="Stand up straight with your feet shoulder width apart. Hold a dumbbell behind your head with your arms bent (using one or both hands). Raise the dumbbel upwards directly over your head until your arms are fully extended. Then slowly lower the dumbbel back down behind your head.")

    tricep_kickback = Exercise(user_id=1, muscle_group_id=11, name="Tricep Kickback",
        image="https://battle-fit.s3.amazonaws.com/dfd29b9d08f54fca9ddf046ab1c0571d.png",
        description="Kneel on a flat bench with one knee and one hand out on the bench for support. Hold a dumbbel in your other hand starting it at your side and arm bent at a 90 degree angle. Extend your forearm back until it is parallel to the floor, then slowly return it to the starting position.")

    db.session.add(crunch)
    db.session.add(plank)
    db.session.add(leg_raise)
    db.session.add(pull_up)
    db.session.add(deadlift)
    db.session.add(bicep_curl)
    db.session.add(hammer_curl)
    db.session.add(calf_raise)
    db.session.add(running)
    db.session.add(stationary_bike)
    db.session.add(jump_rope)
    db.session.add(push_up)
    db.session.add(bench_press)
    db.session.add(farmers_walk)
    db.session.add(bridge)
    db.session.add(squat)
    db.session.add(lunge)
    db.session.add(arnold_press)
    db.session.add(lateral_raise)
    db.session.add(shrug)
    db.session.add(dip)
    db.session.add(overhead_extension)
    db.session.add(tricep_kickback)

    db.session.commit()


def undo_exercises():
    db.session.execute('TRUNCATE exercises RESTART IDENTITY CASCADE;')
    db.session.commit()
