# a, b = 12, 34
# b, a = a, b
# print(a, b)

# dic = {}
# dic["작가"] = "누구"
# print(dic)

# del dic["작가"]
# print(dic)

# dic = {'boy': '소년', 'school': '학교', 'book': '책'}
# print(dic.get('boy'))
# print(dic.get('student'))
# print(dic.get('student', '사전에 없는 단어입니다.'))

# dic = {'boy': '소년', 'school': '학교', 'book': '책'}

# for key in dic:
#     print(key)

# for value in dic.values():
#     print(value)

# for item in dic.items():
#     print(item)

# numbers = [1, 2, 3, 4, 5, 6, 8, 9, 5, 1, 7, 3, 5, 1, 3, 5, 7, 9]

# count = {}
# for n in numbers:
#     if count.get(n):
#         count[n] += 1
#     else:
#         count[n] = 1
# print(count)

# song = "by the rivers of babylon"
# alphabet = dict()
# for c in song:
#     if c.isalpha() == False:
#         continue
#     c=c.lower()
#     if alphabet.get(c):
#         alphabet[c] += 1
#     else:
#         alphabet[c] = 1
# print(alphabet)

# def avg(a, b, c):
#     print((a+b+c)/3)


# avg(3, 5, 10)

# def printf(n, *values):
#     for i in range(n):
#         for value in values:
#             print(value, end='')
#         print()


# printf(2, "안녕하세요", "즐거운", "파이썬")
