'''Alice and Bob are playing a game on a sequence a1,a2,…,an of length n. They move in turns and Alice moves first.
In the turn of each player, he or she should select an integer and remove it from the sequence. The game ends when there is no integer left in the sequence. Alice wins if the sum of her selected integers is even; otherwise, Bob wins Your task is to determine who will win the game, if both players play optimally.'''

n = int(input())
arr = list(map(int, input().split()))
oddC = 0
for i in arr:
	if i % 2 == 1:
		oddC += 1
remOddC = oddC % 4
if remOddC == 0 or remOddC == 3:
	print('Alice win')
elif remOddC == 2:
	print('Bob win')
else:
	print('Alice' if n % 2 == 0 else 'Bob win')