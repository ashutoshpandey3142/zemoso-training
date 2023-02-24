ans=[]
def search(keyword) :

   # implement the function here
   all_word=[keyword]
   for Entry in Thesaurus:
      if keyword==Entry.word:
         for word in Entry.synonyms:
            all_word.append(word)
   for sear_word in all_word:
      count=0
      res=sear_word
      for doc in Corpus:
         for word in doc:
            if sear_word==word:
               count+=1
      ans.append((sear_word,count))

   return ans# modify to return a list of tuples

input = "happy"
output = search(input) # invoke the method using a test input
print(output) # prints the output of the function