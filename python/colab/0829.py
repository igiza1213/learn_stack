def multi(num,start,end):
    result=[]
    for n in range(start,end):
        if n % num == 0:
            result += n
    return result
print(multi)