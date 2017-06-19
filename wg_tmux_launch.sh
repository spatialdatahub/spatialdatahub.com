SESSION=wg
tmux new-session -d -s $SESSION

tmux new-window -t $SESSION:1 -n 'pyserver'
tmux select-window -t $SESSION:1 -n 'pyserver'
tmux send-keys '../wg_dev/bin/python3 manage.py runserver --settings=main.settings.dev' C-m

tmux new-window -t $SESSION:2 -n 'npmscript'
tmux select-window -t $SESSION:2
tmux send-keys 'npm run dev' C-m

tmux attach -t $SESSION
